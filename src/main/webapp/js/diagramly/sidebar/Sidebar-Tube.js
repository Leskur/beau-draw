(function()
{
	Sidebar.prototype.addTubeLibrary = function()
	{
		var s = 'aspect=fixed;html=1;points=[];align=center;image;fontSize=12;image=img/test/'
		this.setCurrentSearchEntryLibrary('test');

		this.addPaletteFunctions('tube', '管道', true,
			[
				this.createVertexTemplateEntry('image;image=img/test/管道设备.png', 1629 * 0.1, 1166 *0.1, '', '管道设备'),
                this.createVertexTemplateEntry(s + 'test.svg', 60, 40, '', '管道'),
			]);

		this.setCurrentSearchEntryLibrary();
	};

})();
