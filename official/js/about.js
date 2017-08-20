/**
 * 关于项目
 */

$(function() {

    //读取开发计划表
    $.get('../data/SCHEDULE.md', function(data) {
        var template = '<tr><td>{version}</td><td>{content}</td></tr>';
        var html = '';
        data.replace(/## (.*?)\s+((\s*- .*?[\r\n]+)+)/g, function(m, s1, s2) {
            html += template.replace('{version}', s1.replace('_(under way)_', '<br><em>(under way)</em>'))
                .replace('{content}', marked(s2));
        });
        $('#schedule').append(html);
    }, 'text');

    //读取更新日志
    $.get('../data/CHANGELOG.md', function(data) {
        var template = '<tr><td>{version}</td><td>{time}</td><td>{content}</td></tr>';
        var html = '';
        var count = 0;
        var itemReg = /#{2,3} (.*?)\s+_(\d{4}-\d{2}-\d{2})_\s+((\s*- .*?[\r\n]+)+)/g;
        data.replace(itemReg, function(m, s1, s2, s3) {
            if(count <= 10) {
                count++;
                html += template.replace('{version}', marked(s1))
                    .replace('{time}', s2)
                    .replace('{content}', marked(s3));
            }
        });
        $('#log').append(html);
    }, 'text');

});