__NUXT_JSONP__("/blog/ssh-tunnel", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp){return {data:[{article:{slug:"ssh-tunnel",description:aI,title:"Build poor mans VPN with SSH and Bitvise",date:"2020-05-31",author:{name:as,bio:at,img:au},toc:[{id:aJ,depth:av,text:aK},{id:aL,depth:av,text:aM}],body:{type:aw,children:[{type:b,tag:r,props:{},children:[{type:a,value:aI}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"SSH"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Software or CLI to tunnel all internet in your device"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ax,props:{id:aJ},children:[{type:b,tag:w,props:{href:"#configure-the-poor-mans-vpn-tunnel-over-ssh-on-macos-linux",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:aK}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Install and configuration proxychains4 (Next generation) from "},{type:b,tag:w,props:{href:"https:\u002F\u002Fgithub.com\u002Frofl0r\u002Fproxychains-ng",rel:[S,T,U],target:V},children:[{type:a,value:"github"}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Befor this configuration, You must be install "},{type:b,tag:u,props:{},children:[{type:a,value:"gcc and make"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[ak,L]},children:[{type:b,tag:u,props:{},children:[{type:a,value:" .\u002Fconfigure --prefix"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:"\u002Fusr --sysconfdir"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:"\u002Fetc\n  "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ay}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aO}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ay}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"install"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aO}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ay}]},{type:a,value:" install-config "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:"installs proxychains.conf"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Configure proxychanins4 from "},{type:b,tag:u,props:{},children:[{type:a,value:"\u002Fetc\u002Fproxychains.conf"}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Comment Socks4 and add Socks5 like blow:"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[ak,L]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"socks5 "},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:aP}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:az}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{start:5},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"You must be ssh to server like below(for Linux and MasOS):"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[ak,L]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aR}]},{type:a,value:" -f -N -D "},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:az}]},{type:a,value:" admin@server1.example.com\n"}]}]}]},{type:a,value:f},{type:b,tag:I,props:{start:6},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"You can check the proxy like "},{type:b,tag:u,props:{},children:[{type:a,value:"curl -I twitter.com"}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"I'm wrote bash file to connect and disconnect to ssh in the MacOS. "},{type:b,tag:w,props:{href:"https:\u002F\u002Fgist.github.com\u002Fpooyagolchian\u002F520ee77f22836d92b483f3f8827f8767",rel:[S,T,U],target:V},children:[{type:a,value:"Poor Man's vpn bash script"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[ak,L]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,"shebang","important"]},children:[{type:a,value:"#!\u002Fbin\u002Fsh"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ad,h]},children:[{type:a,value:"NET_SERVICE"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Wi-Fi\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ad,h]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ad,h]},children:[{type:a,value:"SERVER"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:"admin@server1.example.com\n"},{type:b,tag:c,props:{className:[d,ad,h]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aU}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aB},{type:b,tag:c,props:{className:[d,"environment","constant"]},children:[{type:a,value:"$EUID"}]},{type:a,value:aB}]},{type:a,value:" -ne "},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"0"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aV}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Please run as root!\""}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:"exit"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aW}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aU}]},{type:a,value:" pgrep -f "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:"\u002Fdev\u002Fnull\n"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aV}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"WELCOME TO POOR MAN'S VPN\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Ssh process in running with pid\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"kill"}]},{type:a,value:" -9 "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Kill ssh process with PID\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Ssh process not found\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aW}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aR}]},{type:a,value:" -D "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:a,value:" -f -C -q -N "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"${SERVER}"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Connect to server\""}]},{type:a,value:"\nnetworksetup -setsocksfirewallproxy "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aD}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:aP}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:a,value:"\nnetworksetup -setsocksfirewallproxystate "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aD}]},{type:a,value:" on\n"},{type:b,tag:c,props:{className:[d,ad,h]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Ssh runs on PORT \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\" and PID \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\". socks proxy set on Wi-Fi\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"For turn off socks5 proxy run command -\u003E sudo kill -9 \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"; networksetup -setsocksfirewallproxystate \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\" off\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Change proxychain4 socks5 port sudo sed 's\u002Ffoor\u002Fbar\u002Fg' \u002Fetc\u002Fproxychains.conf\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:ax,props:{id:aL},children:[{type:b,tag:w,props:{href:"#configure-the-poor-mans-vpn-tunnel-over-ssh-on-windows-710",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:aM}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Install "},{type:b,tag:w,props:{href:"https:\u002F\u002Fwww.bitvise.com\u002Fssh-client-download",rel:[S,T,U],target:V},children:[{type:a,value:ae}]},{type:a,value:" and "},{type:b,tag:w,props:{href:"http:\u002F\u002Fwww.mediafire.com\u002Ffile\u002F6fm9v97vnw6qj9y\u002FProxifierPE.zip\u002Ffile",rel:[S,T,U],target:V},children:[{type:a,value:"Proxifier"}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Follow image to install and configuration the SSH tunnel on the Windows"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F1.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F2.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F3.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F4.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:af,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F1.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:af,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F2.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:af,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F3.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:af,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F4.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:af,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F5.jpg"},children:[]}]}]},dir:aE,path:"\u002Farticles\u002Fssh-tunnel",extension:aF,createdAt:W,updatedAt:W},prev:{slug:"host-jekyll-theme-on-github",description:"In this article, you learn about how to deploy the Jekyll theme on the custom domain with Cloudflare",title:"Host Your Jekyll Theme on GitHub With CloudFlare",date:"2016-07-01",author:{name:as,bio:at,img:au},toc:[{id:aY,depth:av,text:aZ}],body:{type:aw,children:[{type:b,tag:ax,props:{id:aY},children:[{type:b,tag:w,props:{href:"#how-to-deploy-jekyll-theme-on-custom-domain",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:aZ}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Create a CNAME file and upload it to your gh-pages repository."}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"To do this, open your favourite text editor and type yout custom domain."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[a_,L]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"www.pooyagolchian.com\n"}]}]}]},{type:a,value:f},{type:b,tag:I,props:{start:aG},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Go to your "},{type:b,tag:w,props:{href:"https:\u002F\u002Fwww.cloudflare.com\u002F",rel:[S,T,U],target:V},children:[{type:a,value:"CloudFlare account"}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Follow like this image with your repo link, For example: pooya-golchian.github.io"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:C,props:{alt:"Cloudflare",src:"\u002Fimg\u002Fcontent\u002Fcloud-flare\u002Fcloud-flare.png"},children:[]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Github IP adress:"}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[a_,L]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"192.30.252.153\n192.30.252.154\n"}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"CHEERS, your website hosted on GitHub :)"}]}]}]},dir:aE,path:"\u002Farticles\u002Fhost-jekyll-theme-on-github",extension:aF,createdAt:W,updatedAt:W},next:{slug:"vue-multiple-theme",description:"Recently, I develop a customizable npm package for the color mode in Vue.js with CSS variable.",title:"Vue.js multiple theme with css variable",date:"2021-01-17",author:{name:as,bio:at,img:au},toc:[{id:a$,depth:aG,text:ba},{id:bb,depth:aG,text:bc}],body:{type:aw,children:[{type:b,tag:bd,props:{id:a$},children:[{type:b,tag:w,props:{href:"#intro",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:ba}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Recently, I develop a customizable npm package for the color mode in Vue.js with CSS variable. this package helps us to manage the theme mode pretty easily.\nIn this article, I describe the functionality of this component.\nYou would download this package at this "},{type:b,tag:w,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fvue-multiple-themes",rel:[S,T,U],target:V},children:[{type:a,value:"URL"}]},{type:a,value:"."}]},{type:a,value:f},{type:b,tag:bd,props:{id:bb},children:[{type:b,tag:w,props:{href:"#how-to-use-vuejs-multiple-theme-component",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:bc}]},{type:a,value:f},{type:b,tag:be,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Install the package with this command "},{type:b,tag:u,props:{},children:[{type:a,value:"npm i vue-multiple-themes"}]},{type:a,value:" OR "},{type:b,tag:u,props:{},children:[{type:a,value:"yarn add vue-multiple-themes"}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Import and register component in your desire place"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Follow the below steps:"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,"language-javascript"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:an}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:an}]},{type:a,value:"themes\n          "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:"defaultTheme"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"'light'\""}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:"themeColorList"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'light'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'dark'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'sepia'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'black'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'coffee'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'rose'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\"\n          "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:"changeThemeOff"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"true\""}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:an}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:an}]},{type:a,value:"themes"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:bj},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x,ap]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,bk]},children:[{type:a,value:bl}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,ap]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"vue-multiple-themes\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x,ap]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,ap]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n  components"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,bk]},children:[{type:a,value:bl}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:a,value:bj},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:be,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"You can override the main CSS in component"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,"language-css"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"\u003Cstyle lang=\"css\" "},{type:b,tag:c,props:{className:[d,"combinator"]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"pseudo-class"]},children:[{type:a,value:":root"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#555555"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\"dark\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:bn}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\"sepia\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#d0bc91"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#8a6c44"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#5f4938"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\"black\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#000000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:bn}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\"coffee\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#394545"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#aab1b3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#e9e5e3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\"rose\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#2e1a1e"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#bcb8ce"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,n]},children:[{type:a,value:"#d5ddef"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:".app-background"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"background-color"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:".app-title"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:".app-subtitle"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"padding-top"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,bo]},children:[{type:a,value:bp}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:".change-theme-box"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"cursor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" pointer"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"font-size"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"20"}]},{type:b,tag:c,props:{className:[d,bo]},children:[{type:a,value:bp}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"font-weight"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" bold"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\n\u003C\u002Fstyle\u003E\n\n"}]}]}]},{type:a,value:f}]},dir:aE,path:"\u002Farticles\u002Fvue-multiple-theme",extension:aF,createdAt:W,updatedAt:W}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","variable","operator","\n  ",":",";","string","color","li","hexcode","=","p","{","}","code","function","a","keyword","div","builtin","class-name","\u003E","img","selector","[","]","echo","\n\n","ol","nuxt-content-highlight","pre","line-numbers","number","\u003C","--app-subtitle-color","property","--app-background-color","--app-title-color","nofollow","noopener","noreferrer","_blank","2021-08-26T21:06:42.078Z","\n            ",",","true",-1,"icon","icon-link","(",")","assign-left","Bitvise","Proxyfier","attribute","attr-name","theme","attr-value","language-bash","`","${PORT}","-","\u002F","module","class","var","Pooya Golchian","Frontend developer and DevOps engineer.","\u002Fimg\u002Favatar\u002Fpooya-golchian.jpg",2,"root","h2","make","1080","PORT","\"","$PID","${NET_SERVICE}","\u002Farticles",".md",3,"#ffffff","When you have a server and you want to have a VPN on the server. You can use this method. The following concepts are required to install.","configure-the-poor-mans-vpn-tunnel-over-ssh-on-macos-linux","Configure The Poor Man's VPN (Tunnel over SSH) on MacOS, Linux","configure-the-poor-mans-vpn-tunnel-over-ssh-on-windows-710","Configure The Poor Man's VPN (Tunnel over SSH) on Windows 7,10","optional","sudo","127.0",".0.1 ","ssh","PID","pgrep -f $","if","then","fi","${PID}","how-to-deploy-jekyll-theme-on-custom-domain","How to deploy jekyll theme on custom domain","language-text","intro","Intro","how-to-use-vuejs-multiple-theme-component","How to use Vue.js multiple theme component","h3","ul","template","vue","multiple","\n          ","script","maybe-class-name","VueMultipleThemes","#333333","#dddddd","unit","px")));