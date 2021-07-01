<?php

function get_image_large_url($filename)
{
	if(!$filename) return '';

	$path_info = pathinfo($filename);
	return url( $path_info['dirname'] . '/' . $path_info['filename'] . '_g.' . $path_info['extension'] );
}

function get_image_small_url($filename)
{
	if(!$filename) return '';

	$path_info = pathinfo($filename);
	return url( $path_info['dirname'] . '/' . $path_info['filename'] . '_p.' . $path_info['extension'] );
}

function get_excerpt($text, $length = 100)
{
	$text = trim(strip_tags($text));

	if(strlen($text) > $length) {
		$excerpt   = substr($text, 0, $length - 3);
		$lastSpace = strrpos($excerpt, ' ');
		$excerpt   = substr($excerpt, 0, $lastSpace);
		$excerpt  .= '...';
	}
	else {
		$excerpt = $text;
	}

	return $excerpt;
}

function adjust_brightness($hex, $steps) {
    // Steps should be between -255 and 255. Negative = darker, positive = lighter
    $steps = max(-255, min(255, $steps));

    // Normalize into a six character long hex string
    $hex = str_replace('#', '', $hex);
    if (strlen($hex) == 3) {
        $hex = str_repeat(substr($hex,0,1), 2).str_repeat(substr($hex,1,1), 2).str_repeat(substr($hex,2,1), 2);
    }

    // Split into three parts: R, G and B
    $color_parts = str_split($hex, 2);
    $return = '#';

    foreach ($color_parts as $color) {
        $color   = hexdec($color); // Convert to decimal
        $color   = max(0,min(255,$color + $steps)); // Adjust color
        $return .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code
    }

    return $return;
}