# PE集成HotPE模块
> 本章节将实现把HotPE模块加入到你的PE，从而实现HotPE模块的功能


模块部署(加载)工具HotPEModDeploy:https://down.hotpe.top/directlink/1/HotPE模块/HotPEModDeploy.exe
使用方法（命令行/help）：

```bash
HotPEModDeploy [path] [/h]
path可以是模块文件或放模块的目录
/h:隐藏UI
/help:帮助
```

Pecmd脚本(添加到Pecmd.ini，HotPEModDeploy.exe放在%SystemRoot%\System32\下)：

//加载HotPE模块(寻找HotPEModule文件夹并用HotPEModDeploy加载其中的模块)
```bash
FORX @\HotPEModule,HotPEModule,0,EXEC !%SystemRoot%\System32\HotPEModDeploy.exe %HotPEModule%
```

打开方式注册表（挂载PE的SOFTWARE到HKEY_LOCAL_MACHINE\pe_soft后导入，HotPEModDeploy.exe放在%SystemRoot%\System32\下）：

```
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM]
@="HotPE模块文件"
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\DefaultIcon]
@="%SystemRoot%\\System32\\HotPEModDeploy.exe"
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\shell]
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\shell\open]
[HKEY_LOCAL_MACHINE\pe_soft\Classes\.HPM\shell\open\command]
@="PECMD EXEC !HotPEModDeploy.exe \"%1\""
```


