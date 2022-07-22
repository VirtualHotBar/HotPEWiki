# PE集成HotPE模块
> 本章节将实现把HotPE模块加入到你的PE，从而实现HotPE模块的功能


模块部署(加载)工具HotPEModDeploy:https://down.hotpe.top/HotPE%E6%A8%A1%E5%9D%97/HotPEModDeploy.exe
使用方法（命令行/help）：

```bash
HotPEModDeployTool2.1命令行帮助
---------------------------------------------
HotPEModDeploy [method] [path] [/lp:"loadPath"] [/h] [/c]
---------------------------------------------

【method】必须
---------------------------------------------
method = [default|quick]
---------------------------------------------
default:以默认模式进行加载
quick:以快速模式进行加载，不必再重新加载直接执行脚本，首先需要通过默认模式自定义模块加载目录进行加载


【path】必须
---------------------------------------------
当method = default时，path = 模块文件或放模块文件的目录
当method = quick时，path = 模块加载目录，为通过默认模式进行加载后的模块加载目录
---------------------------------------------

【/lp:"loadPath"】可选
当method = default时，此参数可选，默认为"X:\Program Files\HotPEModules\"
当method = quick时，不应存在此参数
---------------------------------------------
*说明：冒号和引号均为英文，必须存在引号


【其它参数】可选
/h:隐藏UI
/c:禁止校验，仅默认模式，快速模式默不校验
/help:帮助

*注意：所有参数区分大小写
```

Pecmd脚本(添加到Pecmd.ini，HotPEModDeploy.exe放在%SystemRoot%\System32\下)：

//加载HotPE模块(寻找HotPEModule文件夹并用HotPEModDeploy加载其中的模块)
```bash
FORX @\HotPEModule,HotPEModule,0,EXEC !%SystemRoot%\System32\HotPEModDeploy.exe default %HotPEModule%
```

打开方式注册表（PE启动时导入，HotPEModDeploy.exe放在%SystemRoot%\System32\下）：

```
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM]
@="HotPE模块文件"
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\DefaultIcon]
@="%SystemRoot%\\System32\\HotPEModDeploy.exe"
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\shell]
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\shell\open]
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\shell\open\command]
@="PECMD EXEC !HotPEModDeploy.exe default \"%1\""
```


