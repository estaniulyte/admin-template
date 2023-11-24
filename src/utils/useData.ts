import { ref, onMounted, onUnmounted, toRef, watch } from 'vue';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  data: T;
}

const parseData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
  itemId?: number
) => {
  const data = ref<T>();
  const error = ref<string>('');
  const isLoading = ref<boolean>(false);

  const fetchData = () => {
    const controller = new AbortController();

    const url = itemId ? `${endpoint}/${itemId}` : endpoint;

    isLoading.value = true;

    apiClient
      .get<FetchResponse<T>>(url, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        data.value = res.data as T;
        isLoading.value = false;
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        error.value = err.message;
        isLoading.value = false;
      });

    onUnmounted(() => controller.abort());
  };

  const reactiveData = toRef(data, 'value');

  onMounted(() => {
    fetchData();
  });

  watch(
    () => [deps, itemId],
    () => {
      fetchData();
    }
  );

  return { data: reactiveData, error, isLoading };
};

export default parseData;
