#!/bin/sh

count=$(ls | wc -l)
count=$((count - 1))
count=$(printf "%02d" $count)
name="$count"_"$1"

mkdir "$name"

touch "$name"/index.js
touch "$name"/verify.sh
chmod +x "$name"/verify.sh
cat > "$name"/verify.sh << EOF
#!/bin/sh
bug-clinic verify ./index.js
EOF
