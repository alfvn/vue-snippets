export const formatPrice = function(val){
  if(!val) return '￥0.00'
  val = Number(val)
  if(val<0) return `-￥${Math.abs(val).toFixed(2)}`
  return `￥${val.toFixed(2)}`
}