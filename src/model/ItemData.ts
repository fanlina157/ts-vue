// 笔记的数据
// id title content categoryId createTime


// 导入枚举的数据
import Category from './CateEnum'

class ItemData {
  id:number;
  categoryId:Category;  // 枚举类型
  title:string;
  content:string;
  createTime!:string;  // ！ 告诉编译器可以为空

  constructor(id: number=-1, categoryId: Category=-1, title: string='', content: string='') {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.formDate(Date.now());
  }

  // 日期格式化
  formDate(time:string | number):string {
    let value = new Date(time);
    let year = value.getFullYear();
    let month = value.getMonth()+1;
    let day = value.getDate();
    let h = value.getHours();
    let m = value.getMinutes();
    // let s = value.getSeconds()
    return year + '-' + month + '-' + day + ' ' + h + ':' + m 
  }
}

export default ItemData;