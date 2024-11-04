import ItemRepository from '../repository/ItemRepository';

class ItemService {
  itemRepository;

  constructor() {
    this.itemRepository = new ItemRepository();
  }

  getItems = async () => {
    const res = await this.itemRepository.getItems();
    return res.data.slice(0, 10); // Отдаем первые 10 элементов
  };
}

export default ItemService;
