/* global NexT, CONFIG */

$(document).ready(function() {

  var sidebarInner = $('.sidebar-inner');
  var sidebarOffset = CONFIG.sidebar.offset || 12;

  function getHeaderOffset() {
    return $('.header-inner').height() + sidebarOffset;
  }

  function getFooterOffset() {
    var footer = $('#footer');
    var footerInner = $('.footer-inner');
    var footerMargin = footer.outerHeight() - footerInner.outerHeight();
    var footerOffset = footer.outerHeight() + footerMargin;
    return footerOffset;
  }

  function initAffix() {
    var headerOffset = getHeaderOffset();
    var footerOffset = getFooterOffset();
    var sidebarHeight = $('#sidebar').height() + NexT.utils.getSidebarb2tHeight();
    var contentHeight = $('#content').height();

    // Not affix if sidebar taller than content (to prevent bottom jumping).
    if (headerOffset + sidebarHeight < contentHeight) {
      sidebarInner.affix({
        offset: {
          top   : headerOffset - sidebarOffset,
          bottom: footerOffset
        }
      });
      sidebarInner.affix('checkPosition');
    }

    $('#sidebar').css({ 'margin-top': headerOffset, 'margin-left': 'auto' });
  }

  function recalculateAffixPosition() {
    $(window).off('.affix');
    sidebarInner.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
    initAffix();
  }

  function resizeListener() {
    var mql = window.matchMedia('(min-width: 992px)');
    mql.addListener(function(e) {
      if (e.matches) {
        recalculateAffixPosition();
      }
    });
  }

  initAffix();
  resizeListener();
});

// qmsg
var title2="msg=miniLCT's blog又有新评论啦~！\n"
var SCKEY_Qmsg="https://qmsg.zendee.cn/send/ff643da168ed29418f0d88779dca49dd"
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Qmsg(){
  var pagename=document.title;
  var wz=pagename.indexOf('|');
  var res=pagename.substring(0,wz);
  var pageurl=document.URL;
  var ptime=new Date();
  var vnick=document.getElementsByClassName("vnick vinput")[0].value;
  var vmail=document.getElementsByClassName("vmail vinput")[0].value;
  var vlink=document.getElementsByClassName("vlink vinput")[0].value;
  var veditor=document.getElementsByClassName("veditor vinput")[0].value;
  var data="昵称："+vnick+"\n邮箱："+vmail+"\n网站地址："+vlink+"\n当前页面："+pagename+"\n评论内容："+veditor+"\n跳转链接："+pageurl+"\n评论时间"+ptime.toLocaleString();
  var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
  httpRequest.open('POST',SCKEY_Qmsg, true); //第二步：打开连接
  httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
  httpRequest.send(title2+data);//发送请求 
};

  document.body.addEventListener('click', function(e) {
  if(e.target.className.indexOf('vsubmit') === -1) {
    return;
  }
  send_valine_Qmsg();
})