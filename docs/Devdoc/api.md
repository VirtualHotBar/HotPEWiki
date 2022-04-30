# API
> 此章节列出一些HotPE内可用的API接口，方便开发者调用

## 设置随机壁纸
```bash
RandomWallpapers.exe  图片目录（格式：JPG）
```
## 关于窗口
```bash
About.exe
```
## 将文件作为模块加载

```bash
HotPEModDeploy [path] [/h]
path可以是模块文件或放模块的目录
```
## Edgeless2HPM
把Edgeless插件包(.7z)转换成HotPE模块(.hpm):
> *说明:测试功能，仅限个人使用！请保留源Edgeless插件包的打包者信息！
命令行:
```bash
HotPE模块制作器2.0.exe    /Edgeless2HPM    Edgeless插件包路径(.7z)    压缩率(0-22)

生成完成后的HotPE模块在Edgeless插件包所在目录
