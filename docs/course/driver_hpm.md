# 添加自定义驱动，把驱动打包成HotPE模块
## 工具
1. HotPE模块制作工具：https://down.hotpe.top/s/h4cj1v
2. Dism++：https://pan.hotpe.top/s/eEiV
3. Drvindex：https://pan.hotpe.top/s/nmh3

## 步骤
1.用Dism++提取驱动
![](https://pan.hotpe.top/api/v3/file/source/250/1.png?sign=bobc8ZxxEeA4_Yy0B13ZW8yC2ZyF47Dzs_9bqPbzHQU%3D%3A0)

2.将驱动打包为.7z文件，使用7-Zip
![](https://pan.hotpe.top/api/v3/file/source/253/4.png?sign=7FFrjI9Y86cWYCnJuy54uP-jSQLbjZBOsYGD32PXpzI%3D%3A0)

3.打开HotPE模块制作工具填写基本信息，点击“下一步”
![](https://pan.hotpe.top/api/v3/file/source/251/2.png?sign=bYQGn2ASlP78qtN75BD61l-XkNMgG3jxwtqbvovsIeQ%3D%3A0)

4.跳过嵌入文件步骤，点击“跳过此步骤(高级)”
![](https://pan.hotpe.top/api/v3/file/source/248/8.png?sign=KlEkzucYmrrxdvHB4fJ_MDiiBSf30LymXKThuliAMA8%3D%3A0)

5.点击“编辑嵌入文件和脚本”
![](https://pan.hotpe.top/api/v3/file/source/249/9.png?sign=IbqF27F5Nw0nIyenVY-n26NZzESpkbMf2EhQHTI8t0k%3D%3A0)

6.将驱动包和Drvindex拖进HotPE模块制作工具
![](https://pan.hotpe.top/api/v3/file/source/252/3.png?sign=AWCU-eqt8aPmDM7PBHmnbcKJtUxbxeL9Zypsm1pZ3jo%3D%3A0)

7.添加脚本，复制以下内容到脚本，然后点击“完成编辑”：
```bash
EXEC %CurDir%\Drvindex.exe -b
//搜索当前目录下的驱动压缩包将自动匹配安装驱动
//%CurDir%表模块目录
```
![](https://pan.hotpe.top/api/v3/file/source/247/5.png?sign=x98wXgvWSAofrdZpGOgxHoOU9-efhn3w72zi-3MqFDo%3D%3A0)

7.点击“开始制作”，等待制作完成
![](https://pan.hotpe.top/api/v3/file/source/254/7.png?sign=P8TS2zYRpbbPyNTQuTd8jbGHLQIIkhIcFuKP2NHdOGA%3D%3A0)

制作好的模块就可以在HotPE中测试了
自动加载模块：[如何加载HotPE模块——自动加载](http://https://wiki.hotpe.top/loadhpm.html#%E8%87%AA%E5%8A%A8%E5%8A%A0%E8%BD%BD "如何加载HotPE模块——自动加载")

