let body = $response.body;

if (/<\/head>/.test(body)) {
  body = body.replace(/<\/head>/, "</head><style>.addbox,#notice_container,.gotoclick,.list-sec{display:none !important;}</style>");
  $done({ body });
}

$done({});
