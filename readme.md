# Lab de Arquitetura - Contabilidade
### Susgestão de arquitetura para aplicação node.js com front end Angular
<br />`OBS. Está sendo refatorada`

## <b> Iniciar Mongo DB (MAC OS)
```
mongod --config /usr/local/etc/mongod.conf --fork
```
## <b> Iniciar Mongo DB (Open Suse)

```
mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork
```

## <b> Parar <i style='color: red'>Mongo DB</i>, pegar o PID e executar kill <PID>
```
ps aux | grep -v grep | grep mongod
```

# <br/>
# Rodar a solução
### Keycloak e Mongo devem estar rodando já

## API
```
node ./contabilidade-api/build/index.js
```

## Front end
```
cd ./contabilidade-frontend
ng serve
```