//自适应屏幕比例

function remSize(){
    //获取设备宽度
    var deviceWith=document.documentElement.clientWidth || window.innerWidth;
    if (deviceWith>=750){
        deviceWith=750
    }
    if (deviceWith<=320){
        deviceWith=320
    }
    //监听元素变化
    document.documentElement.style.fontSize = (deviceWith / 7.5) + 'px'
    document.querySelector('body').style.fontSize=0.3+'rem'
//    设计稿是750px  设置一半的宽度，就是375px   1rem==100px的设计稿宽度  表达一半的宽度就是3.75rem
}
remSize()
window.onresize=function () {
    remSize()
}