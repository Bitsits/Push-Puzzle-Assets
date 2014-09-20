Drupal.gwjmodReply = function(content) {
  var text = $('#edit-comment').val() + content;
  $('#edit-comment').val(text);
  $('#edit-comment')[0].focus();
}

Drupal.gwjmodAutoAttach = function() {
  // Open filter tips in a new window
  $('form .tips a').attr('target', '_blank');
  if ($('img').length < 100) {
    Drupal.gwjmodResizeImages();
  }
  // Set a character limit on story decks
  $('#edit-field-deck-0-value').show_char_limit(140);
  // Rewrite Amazon links
  $('a[ @href *= "amazon.com" ]').each(function() {   
    var href = $(this).attr('href');
    var re = /\/([A-Z0-9]{10})(\/|\?|\b)/i
    var asin = re.exec(href);
    if (asin && asin[1]) {
      var shorturl = '/go/amazon?asin='+asin[1];
      $(this).attr('href', shorturl);
    }
  });
}

Drupal.gwjmodResizeImages = function() {
  var element = $(".comment .content")[0];
  if (element) {
    maxWidth = element.offsetWidth - 10;
    $("img").each(function() {
      var src = this.src;
      var width = this.width;
      var height = this.height;
      if (src.indexOf('gamerswithjobs.com') < 0) {
        if (width > maxWidth) {
          newHeight = parseInt(height * maxWidth / width);
          $(this).css('width', maxWidth + 'px');
          $(this).css('height', newHeight + 'px');
        }
      }
    });
  }
}

/**
* Display interactive character limit feedback for text field or text area.
* see http://ndpsoftware.com/show_char_limit.php
*/
jQuery.fn.show_char_limit = function(limit_or_opts, opts) {

  if (!opts) opts = {};

  // if provided max_length, save it
  if (typeof limit_or_opts === 'number') {
  	opts['maxlength'] = limit_or_opts
  } else {
  	opts = limit_or_opts || {}
  }

  var o = jQuery.extend({
    error_class: 'error',
    status_style: 'text',
    status_element_suffix: '__status'
  }, opts);
  
  var show_limit = function(src) {

    src = jQuery(src);

    var chars_typed = src.val().length;

    var m = src.attr('maxlength');
    if (!m || m == "" || m == -1) {
    	m = o['maxlength'];
    }
    var left = m - chars_typed;

    var msg;
    if (o.status_style == 'chars_typed') {
      msg = "" + chars_typed;
    } else if (o.status_style == 'chars_left') {
      msg = "" + left;
    } else {
       var status = left >= 0 ? 'left' : 'over';
       var unit = (Math.abs(left) != 1 ? "characters" : "character");
       msg = "" + Math.abs(left) + " " + unit + " " + status;
    }
    
    var e = o.status_element ? o.status_element : ("#" + src.attr('id') + o.status_element_suffix);
    if (jQuery(e).size() == 0) {
    	if (src.attr('id') == '') {
    	    var id = "" + Math.floor(Math.random() * 9999999999);
    		src.attr('id', id);
    		e = '#'+id + o.status_element_suffix;
    	}
    	src.after('<span class="status" id="'+src.attr('id') + o.status_element_suffix +'"></span>');
    }
    jQuery(e).html(msg);
    if (o.error_element || o.error_element_suffix) {
		var e = o.error_element ? o.error_element : ("#" + src.attr('id') + o.error_element_suffix);
		if (left < 0) {
		  jQuery(e).addClass(o.error_class);
		} else {
		  jQuery(e).removeClass(o.error_class);
		}
    }
  };
  
  return this.each(function() {
    show_limit(this);
    jQuery(this).keyup(function() {
      show_limit(this);
    });
  });
};

if (Drupal.jsEnabled) {
  $(document).ready(Drupal.gwjmodAutoAttach);
}
