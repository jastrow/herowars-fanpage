<?php

const NEWSLIST = 'https://community-api.hero-wars.com/api/posts/published?page=1';
const NEWS_ARTICLE = 'https://community.hero-wars.com/post/';
const NEWS_ARTICLE_DATA = 'https://community-api.hero-wars.com/api/posts/';

$news = file_get_contents(NEWSLIST);
$json = json_decode($news);
$giftLinks = [];

foreach($json->data as $keyNr => $new) {
	$data = file_get_contents(NEWS_ARTICLE_DATA . $new->id);
	$dataJ = json_decode($data);
	foreach($dataJ->data->attributes->body as $body) {
		$html = $body->data->text;
		preg_match('/<a.*gift_id.*<\/a>/', $html, $hits);
		if($hits && count($giftLinks) < 3) {
			$giftLinks = array_merge($giftLinks, $hits);
		}
	}
	if($keyNr > 3) { break; }
}

function delText($t) {
    $n = trim(str_replace(['CLICK HERE to get ', 'the'], '', $t));
    $n = str_replace('<a', '<a target="_blank" class="giftlinks"', $n);
	return $n;
}

echo json_encode(array_map('delText',$giftLinks));

?>