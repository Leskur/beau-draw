(function()
{
	Sidebar.prototype.addTestPalette = function()
	{
		var w = 100;
		var h = 100;
		var s = 'whiteSpace=wrap;html=1;shape=mxgraph.test.';
		var s2 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=mxgraph.test.';
		var s3 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=';
		var gn = 'mxgraph.test';
		var dt = '';
		this.setCurrentSearchEntryLibrary('test');

		this.addPaletteFunctions('test', mxResources.get('test'), false,
			[
				this.createVertexTemplateEntry(s2 + 'rect;fillColor2=none;strokeWidth=1;size=20;indent=5;', w * 1.2, h * 0.6, '', 'Partial Rectangle'),
				this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=none;', w * 1.2, h * 0.6, '', 'Partial Rectangle'),
				this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=none;routingCenterX=-0.5;', w * 1.2, h * 0.6, '', 'Partial Rectangle'),
				this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=none;', w * 1.2, h * 0.6, '', 'Partial Rectangle'),
				this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=none;', w * 1.2, h * 0.6, '', 'Partial Rectangle'),
			]);

		this.setCurrentSearchEntryLibrary();
	};

})();
