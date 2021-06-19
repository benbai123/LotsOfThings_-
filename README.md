
# 建立 VirtualBox VM 並用 VS Code 以 SSH 連入操作

### 概要

介紹如何以 VirtualBox 在本機建立 Ubuntu VM

並使用 Visual Studio Code 遠端開發 Plugin 

以 ssh 連線方式連入 VM 操作

參見影片檔案 VSCcode_ssh連線_本機VM.mp4

或觀看線上版本 [VSCcode_ssh連線_本機VM](https://drive.google.com/file/d/1OCKFo4JHivoJgdo0OWIWcrsMvDAObddu/view?usp=sharing)

### 相關工具或軟體

[Visual Studio Code](https://code.visualstudio.com/)

[VirtualBox](https://www.virtualbox.org/)

[Ubuntu Download](https://ubuntu.com/download)


### 讓 Ubuntu 可以接受 ssh 連線

```
# 練習專用設定
# 更多相關安全性設定見 https://askubuntu.com/a/51926

sudo apt update -y
sudo apt install -y ssh
sudo ufw allow 22
```

### 以 VS Code ssh 連入 VM 後建測試檔

```
cd ~/Public
touch test.txt
```