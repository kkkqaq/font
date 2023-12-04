<script src="https://cdn.jsdelivr.net/gh/1426239465/98dou.cn/fzts/ts.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/1426239465/98dou.cn/fzts/ts.css" />

<script type="text/javascript">
function copy_remind(){
  toastr.success( "复制成功！");
  clear_toastr(1600); 
   // 动态设置消息提示时间
  function clear_toastr(time){
       setTimeout(
           function(){ 
               toastr.clear();
       }, time);
  }
}
document.addEventListener("copy",function(e){
  if(window.getSelection(0).toString()){
      copy_remind(); 
  }  
  else{
    toastr.info("啊噢...你没还没选择复制的内容呢！", "复制提示");  
  }
});  
</script>

<style type="text/css">
    a {text-decoration: none;}
    div.usercm{background-repeat:no-repeat;background-position:center center;background-size:cover;background-color:#fff;font-size:13px!important;width:130px;-moz-box-shadow:1px 1px 3px rgba
(0,0,0,.3);box-shadow:0px 0px 15px #333;position:absolute;display:none;z-index:10000;opacity:0.9; border-radius: 8px;}
    div.usercm ul{list-style-type:none;list-style-position:outside;margin:0px;padding:0px;display:block}
    div.usercm ul li{margin:0px;padding:0px;line-height:35px;}
    div.usercm ul li a{color:#666;padding:0 15px;display:block}
    div.usercm ul li a:hover{color:#fff;background:rgba(170,222,18,0.88)}
    div.usercm ul li a i{margin-right:10px}
    a.disabled{color:#c8c8c8!important;cursor:not-allowed}
    a.disabled:hover{background-color:rgba(255,11,11,0)!important}
    div.usercm{background:#fff !important;}
    </style>
<div class="usercm" style="left: 199px; top: 5px; display: none;">
    <ul>
        <li><a href="javascript:void(0);" onclick="getSelect();"><i class="fa fa-copy fa-fw"></i><span>复制</span></a></li>
        <li><a href="javascript:history.go(1);"><i class="fa fa-arrow-right fa-fw"></i><span>前进</span></a></li>
        <li><a href="javascript:history.go(-1);"><i class="fa fa-arrow-left fa-fw"></i><span>后退</span></a></li>
        <li style="border-bottom:1px solid gray"><a href="javascript:window.location.reload();"><i class="fa fa-refresh fa-fw"></i><span>刷新</span></a></li>        
        <li><a href="javascript:void(0);"  onclick="baiduSearch();"><i class="fa fa-paw fa-fw"></i><span>百度</span></a></li>
        <li><a href="javascript:void(0);" onclick="googleSearch();"><i class="fa fa-google fa-fw"></i><span>谷歌</span></a></li>
        <li><a href="https://vip.xn--kivy66br3pu7d.top/"><i class="fa fa-fighter-jet"></i><span>枫的API</span></a></li>
        <li style="border-bottom:1px solid gray"><a target="_blank" href="https://pan.memoyu.top/"><i class="fa fa-server"></i><span>枫的云盘</span></a></li>
        </ul>
</div>
