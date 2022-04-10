#minikube mount .:/mnt/data
#kubectl apply -f db.yml
psql -h localhost -U postgresadmin --password -p 32002 postgresdb

