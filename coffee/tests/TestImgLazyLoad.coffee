miam(
	'tests/TestImgLazyLoad'
	[
		'system/TestUnit'
		'system/ImgLazyLoad'
	]
	() =>
		class TestImgLazyLoad extends TestUnit
			constructor: () ->
				super TestUnit.outputs.HTML
				new ImgLazyLoad 'my-lazy-img'
)