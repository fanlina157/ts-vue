// 用于操作localStorage
class DataHelpler {
  dataKey: string; //localstorage key
  primaryKey: string; // id

  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey
    this.primaryKey = primaryKey
  }

  // [{content:'3333', id :1, categroyId:1, title:'dfdff', createTime:'xxx'}]
  // 读取本地数据
  readData(): any {
    let pinglunStr: string | null = localStorage.getItem(this.dataKey)
    let pinglunArr: any = [];   // 这一定要给默认值
    if (pinglunStr) {
      pinglunArr = JSON.parse(pinglunStr)
    }
    return pinglunArr
  }
  // 存本地数据
  saveData(pinglunArr: object[] ): void {
    let pinglunStr: string = JSON.stringify(pinglunArr)
    localStorage.setItem(this.dataKey, pinglunStr)
  }
}
export default DataHelpler
