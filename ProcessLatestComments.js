$(document).ready(function() {
	$("a.CommentTextEdit").click(function() {
		var $textarea = $("<textarea></textarea>");
		var $parent = $(this).parent();
		$textarea.attr('name', $parent.attr('id')); 
		$textarea.height($parent.height()); 
		$(this).remove(); // remove edit link
		$textarea.val($parent.text()); 
		$parent.after($textarea);
		$parent.remove();
		return false; 
	}); 
}); 
