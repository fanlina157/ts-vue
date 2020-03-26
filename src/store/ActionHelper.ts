import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
class ActionHelper {
  // 数据处理
  DataHelper: DataHelper = new DataHelper('memoData', 'id');
  // 笔记数据
  memoList!: Array<ItemData>;  //数组泛型

  constructor() {
    // 读取本地数据 将笔记数组 保存到  this.memoList 中
    this.memoList = this.readDataDeal()
  }
  // 通过DataHelper 拿到本地存储的数据 
  // 然后通过操作 转成 ItemData 里需要的数据
  readDataDeal(): Array<ItemData>{

    let dataObj = this.DataHelper.readData()

    let arrItem =  dataObj.map((ele:any) => {
      let item:ItemData = new ItemData();
      item.id = ele.id;
      item.categoryId = ele.categoryId;
      item.title = ele.title;
      item.content = ele.content;
      item.createTime = ele.createTime
      return item
    })
    return arrItem
  }

  // 新增笔记
  add(item: ItemData): number {
    console.log(4,item)
    // 将笔记添加到笔记数组
    this.memoList.push(item)
    console.log(this.memoList)
    // 将笔记数组保存到本地
    this.DataHelper.saveData(this.memoList)
    // 返回 新增id
    return item.id
  }
  // 修改笔记
  edit(item: ItemData): void {
    console.log(1,this.memoList);
    
    // 找出修改的项
    // 返回符合条件的项
    console.log(2,item)
    let editItem: ItemData | undefined = this.memoList.find(ele =>
      {return ele.id == item.id}
    )  
    console.log(3,editItem)
    // 存到本地和数组
    if(editItem) {
      editItem.categoryId = item.categoryId
      editItem.title = item.title
      editItem.content = item.content
      console.log(this.memoList)
      this.DataHelper.saveData(this.memoList)
    }
  }
  // 删除笔记
  remove(id:number):void { 
    let Index :number =  this.memoList.findIndex((ele:any) =>ele.id == id)
    if(Index !== -1) {
      this.memoList.splice(Index, 1)
      this.DataHelper.saveData(this.memoList)
    }
  }

}
export default ActionHelper;