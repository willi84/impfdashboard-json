# impfdashboard-json
Crawling once an hour [impfdashboard.de](https://impfdashboard.de/).
Find the data here [https://willi84.github.io/impfdashboard-json/current.json](https://willi84.github.io/impfdashboard-json/current.json)

## widget (Android)

<img src="https://user-images.githubusercontent.com/6207308/118729822-de2a7000-b836-11eb-93a5-17208e0e83c7.PNG" width="200" />



I've created with [KWGT](https://play.google.com/store/apps/details?id=org.kustom.widget&hl=de&gl=US) the widget. I am using the [Pro Version](https://play.google.com/store/apps/details?id=org.kustom.widget.pro&hl=de&gl=US)
You can load my preset from here:
* [import preset](https://github.com/willi84/impfdashboard-json/blob/main/widget/Impfstatus_Widget.kwgt?raw=true) 

## preset data

### globals
| type | description | key   | value |
|------|--------------|-------|-------|
| text | API url with time key because of caching  | ```url```   | ```https://willi84.github.io/impfdashboard-json/current.json?t=$gv(time)$``` |
| text | value of 1st vaccines | ```erst_quo``` | ``` $wg(gv(url), json, .title_erst)$ ``` |
| text | title of widget | ```title``` | ``` $wg(gv(url), json, .title_widget)$ ``` |
| text | update of vaccines | ```diff``` | ``` $wg(gv(url), json, .title_change)$ ``` |
| text | value of all vaccines | ```voll``` | ``` $wg(gv(url), json, .title_voll)$ ``` |
| text | date of last update | ```date``` | ``` $wg(gv(url), json, .title_date)$ ``` |
| text | timestamp to avoid caching (date + minute) | ```time``` | ``` $sh("date+%Y%m%d%H%M" + gv(timestamp))$ ``` |

* create global of type text with the key as name
* check the element (right) and use in the top the 3-Point-menu and choose formular (Formel) to type in the formulars
* if its correct set u see a little calculator and also the preview of the value

### items/elemente
| type |  description | value |
|------|--------------|-------|
| Text | Update of vaccines| ```$gv(diff)$``` |
| Text | Title of the widget |```$gv(title)$``` |
| Text | 1st vaccines quote | ```$gv(erst_quo)$``` |
| Text | full vaccines quote | ```$gv(voll)$``` |
| Text | last update | ```$gv(date)$``` |

## screenshots
![210519-screenshot-kwgt](https://user-images.githubusercontent.com/6207308/118729580-770cbb80-b836-11eb-8c6e-66581f7e459f.PNG)


## widget (iOS)
I don't have iOS, PRs welcome

## links
* https://play.google.com/store/apps/details?id=org.kustom.widget&hl=de&gl=US
