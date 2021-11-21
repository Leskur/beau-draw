(function()
{
	Sidebar.prototype.addTestPalette = function()
	{
		this.setCurrentSearchEntryLibrary('test');

		this.addPaletteFunctions('test', mxResources.get('test'), true,
			[
				this.createVertexTemplateEntry('image;image=img/test/便携式发电机_1.png', 565 * 0.1, 461 *0.1, '', '便携式发电机'),
				this.createVertexTemplateEntry('image;image=img/test/便携式发电机_2.png', 969 * 0.1, 923 *0.1, '', '便携式发电机'),
				this.createVertexTemplateEntry('image;image=img/test/全自动机械臂_1.png', 895 * 0.1, 1142 *0.1, '', '全自动机械臂'),
				this.createVertexTemplateEntry('image;image=img/test/全自动机械臂_2.png', 854 * 0.1, 1322 *0.1, '', '全自动机械臂'),
				this.createVertexTemplateEntry('image;image=img/test/发动机.png', 962 * 0.1, 1073 *0.1, '', '发动机'),
				this.createVertexTemplateEntry('image;image=img/test/发电机.png', 1567 * 0.1, 1647 *0.1, '', '发电机'),
				this.createVertexTemplateEntry('image;image=img/test/变压器.png', 285 * 0.1, 523 *0.1, '', '变压器'),
				this.createVertexTemplateEntry('image;image=img/test/吊机.png', 629 * 0.1, 336 *0.1, '', '吊机'),
				this.createVertexTemplateEntry('image;image=img/test/搅拌机.png', 1500 * 0.1, 1096 *0.1, '', '搅拌机'),
				this.createVertexTemplateEntry('image;image=img/test/机器人.png', 901 * 0.1, 717 *0.1, '', '机器人'),
				this.createVertexTemplateEntry('image;image=img/test/楼顶信号通讯电塔.png', 593 * 0.2, 351 *0.2, '', '楼顶信号通讯电塔'),
				this.createVertexTemplateEntry('image;image=img/test/涡轮增压发动机引擎.png', 1194 * 0.1, 1058 *0.1, '', '涡轮增压发动机引擎'),
				this.createVertexTemplateEntry('image;image=img/test/电箱_1.png', 590 * 0.2, 502 *0.2, '', '电箱_1'),
				this.createVertexTemplateEntry('image;image=img/test/电箱_2.png', 194, 125, '', '电箱_2'),
				this.createVertexTemplateEntry('image;image=img/test/空气压缩机.png', 1039 * 0.1, 905 *0.1, '', '空气压缩机'),
				this.createVertexTemplateEntry('image;image=img/test/管道设备.png', 1629 * 0.1, 1166 *0.1, '', '管道设备'),
				this.createVertexTemplateEntry('image;image=img/test/过滤器压力罐油罐.png', 1721 * 0.1, 1005 *0.1, '', '过滤器压力罐油罐'),
				this.createVertexTemplateEntry('image;image=img/test/除尘器.png', 582 * 0.1, 433 *0.1, '', '除尘器'),
				this.createVertexTemplateEntry('image;image=img/test/高温烤箱.png', 599 * 0.1, 1224 *0.1, '', '高温烤箱'),
			]);

		this.setCurrentSearchEntryLibrary();
	};

})();
