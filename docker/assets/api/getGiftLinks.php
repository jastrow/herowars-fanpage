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
		preg_match('/<a.*href="(.*gift_id.*)".*>(.*)<\/a>/', $html, $hits);
		//echo '<pre>'.print_r($hits, true).'</pre>';
		if($hits && count($giftLinks) < 3) {
			$giftLinks[] = '<a target="_blank" class="giftlinks" href="'.$hits[1].'">'.filter($hits[2]).'</a>';
		}
	}
	if($keyNr > 3) { break; }
}

function filter($txt) {
	$filter = ['click', 'here', 'to', 'get', 'and', '!', '.'];
    $words = explode(' ', $txt);
    $newWords = [];
    foreach($words as $w) {
    	$w = str_replace('!','',$w);
    	if (in_array(mb_strtolower($w), $filter)) { continue; }
    	$newWords[] = $w;
    }
    return implode(' ', $newWords);
}

echo json_encode($giftLinks);

?>