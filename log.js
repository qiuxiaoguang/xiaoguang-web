var log4js = require('log4js');
var path = require('path');

log4js.configure({
    appenders: {
        fenbiTeacherCms: {
            type: "dateFile",
            filename: 'log/logs',
            alwaysIncludePattern: true,
            pattern: "-yyyy-MM-dd.log",
            encoding: 'utf-8',
        }
    },
    categories: {
        default: {
            appenders: ['fenbiTeacherCms'],
            level: 'all'
        },
        fenbiTeacherCms: {
            appenders: ['fenbiTeacherCms'],
            level: 'info'
        }
    },
    pm2: true,
    pm2InstanceVar: 'fenbiTeacherCms'
});
 
exports.logger = log4js.getLogger("fenbiTeacherCms");
exports.useLog = function () {
	return log4js.connectLogger(log4js.getLogger("fenbiTeacherCms"), {level: log4js.levels.INFO});
}