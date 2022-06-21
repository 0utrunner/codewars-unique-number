exports.oddone = function unique(arr) {
    if(arr[0] != arr[1] && arr[0] != arr[2]){
      return arr[0]
    }
    return arr.find(element => element != arr[0])
  }