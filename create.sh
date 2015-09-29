#!/bin/sh

count=$(ls | wc -l)
count=$((count - 3))
count=$(printf "%02d" $count)
name="$count"_"$1"

# create directory
mkdir "$name"

# create index.js
touch "$name"/index.js

# create verify.sh
touch "$name"/verify.sh
chmod +x "$name"/verify.sh
cat > "$name"/verify.sh << EOF
#!/bin/sh
bug-clinic verify ./index.js
EOF

# create run.sh
touch "$name"/run.sh
chmod +x "$name"/run.sh
cat > "$name"/run.sh << EOF
#!/bin/sh
bug-clinic run index.js
EOF
