set -e
###
 # @Author: Arthur_Zhang
 # @Date: 2023-02-03 17:53:57
 # @LastEditors: Arthur_Zhang
 # @LastEditTime: 2023-02-03 18:55:29
 # @Description: 
### 

npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/kingzhang1228/blog.git master:gh-pages-v2

cd -
