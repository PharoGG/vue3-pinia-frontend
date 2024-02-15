import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';

interface ErrorResponse {
  title: string;
}

export const useStore = defineStore({
  id: 'mainStore',
  state: () => ({
    selectedEntity: null as string | null,
    results: [] as string[],
    isLoading: false,
    entities: ['Не выбрано', 'Сделка', 'Контакт', 'Компания'] as string[],
  }),
  actions: {
    setSelectedEntity(entity: string | null) {
      this.selectedEntity = entity;
    },
    addResult(result: string) {
      this.results.push(result);
    },
    setLoading(status: boolean) {
      this.isLoading = status;
    },
    async createEntity() {
      if (!this.selectedEntity) return;

      this.setLoading(true);

      try {
        let url = '';
        let data: any = {};

        if (this.selectedEntity === 'Сделка') {
          url = '/leads';
          data = { name: ['Значение1'] };
        } else if (this.selectedEntity === 'Контакт') {
          url = '/contacts';
          data = [{ first_name: 'Петр', last_name: 'Смирнов' }];
        } else if (this.selectedEntity === 'Компания') {
          url = '/companies';
          data = [{ name: 'АО Рога и Копыта' }];
        }

        const response = await axios.post(url, data);
        this.addResult(`ID созданной сущности: ${response.data.id}. Статус код: ${response.data.statusCode}`);
      } catch (error: unknown) {
        const axiosError = error as AxiosError<ErrorResponse>; 
        this.addResult(`Ошибка создания сущности: ${axiosError.response?.data?.title || 'Unknown error'}, Статус код: ${axiosError.response?.status || 'Unknown'}`);
      }

      this.setLoading(false);
    },
  },
});
