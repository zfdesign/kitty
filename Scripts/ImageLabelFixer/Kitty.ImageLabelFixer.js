var Kitty = Kitty || {};
Kitty.ImageLabelFixer = function(img) {
	this.img = img;
	this.img.bind("click", $.proxy(this, "handleImg_onClick"));
}
Kitty.ImageLabelFixer.prototype.handleImg_onClick = function(e) {
	var relatedElement = $("#"+this.img.parents("label").attr("for"));
	switch(relatedElement[0].tagName.toLowerCase()) {
		case "textarea":
		case "select":
			relatedElement.trigger("focus");
		case "input":
			switch(relatedElement[0].type.toLowerCase()) {
				case "text":
				case "password":
					relatedElement.trigger("focus");
				case "radio":
				case "checkbox": 
					if(relatedElement[0].checked) {
						relatedElement.prop("checked", false);
					}
					else {
						relatedElement.prop("checked", true);
					}
			}
	}
}