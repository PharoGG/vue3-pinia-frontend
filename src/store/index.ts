import { defineStore } from 'pinia';

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

      this.addResult('Результат создания сущности');
      this.setLoading(false);
    },
  },
});