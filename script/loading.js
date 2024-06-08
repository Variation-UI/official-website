$(document).ready(function(){
	function LoadingClass(){
		this.wrap = jQuery(".mmd-loading-wrap");
		this.run = function(){
			this.wrap.each(function(i){
			
				//计算圆圈的宽度
				var bw = Math.round($(this).width()/15);
				var w = $(this).width() - 2 * bw;
				//通过自定义属性得到圆圈的颜色
				var circleColor = $(this).attr("circleColor");
				
				//动态生成圆圈。即将上一个版本中html的代码搬移到js中，减低html代码使用量
				var div = "<div class='mmd-loading-circle-layout'>"
					  +"<div class='mmd-loading-layout-left'>"
						+"<div class='mmd-loading-circle-left'"
							+"style='width:"+w+"px;height:"+w+"px;border-width:"+bw+"px;border-color:"+circleColor+";"
								+"border-left:"+bw+"px solid transparent;"+"border-bottom:"+bw+"px solid transparent;'"+"></div>"
					  +"</div>"
					  +"<div class='mmd-loading-layout-right'>"
						+"<div class='mmd-loading-circle-right'"
							+"style='width:"+w+"px;height:"+w+"px;border-width:"+bw+"px;border-color:"+circleColor+";"
								+"border-right:"+bw+"px solid transparent;"+"border-top:"+bw+"px solid transparent;'"+"></div>"
					  +"</div>"
				  +"</div>";
				$(this).append(div);
			});
		}
	}
	//自动运行
	(function(){
		var loading = new LoadingClass();
		loading.run();
	})();
});