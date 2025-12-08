# ltat.03.002-veebileht
LTAT.03.002 veebilehe projekti rühmatöö.


## GitHub Actions HTML valideerimine

Projekti HTML failide valideerimiseks on lisatud GitHub Actions töövoog. 
See kontrollib W3C standardite järgi HTML5 kehtivust ja aitab tagada koodi kvaliteeti.

### Seadistamine
1. Edasta projekti muudatused GitHubi reposse (kui pole veel tehtud).
2. Töövoog käivitub automaatselt igal pushil ja pull requestil `main` või `master` harule.
3. Vaata valideerimise tulemusi GitHubi repos actionite vahekaardil..
4. Kui valideerimine ebaõnnestub ja leitakse vead, paranda HTML vead ja edasta muudatused uuesti.

Töövoog kasutab `html5validator-action` tööriista, mis skannerib üle projekti
kõiki html faile HTML ja kuvab hoiatused/vead logis.

