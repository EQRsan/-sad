/*

loon

dsenrp55学习网站

Scheme示例：
SenPlayer://x-callback-url/play?url=
mkvpipurl://

*/

var m3u8 = $request.url;
console.log(m3u8);
var sch = $persistentStore.read('Scheme')
console.log(sch);
if (sch == null) {
    var oU = m3u8;
} else {
    var oU = sch + m3u8;
}
console.log(oU);
$notification.post("", "", "点击通知观看", { 'openUrl': oU })
$done({})











