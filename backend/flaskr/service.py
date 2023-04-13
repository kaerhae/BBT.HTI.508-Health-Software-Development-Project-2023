import requests

# ClientService class is tool for fetching data from external fhir server, which is available on internet.
#
# By this point ClientService has 3 methods

# 1) __init__ method is initializing url, username and password.
#    Method can be used like this: s = ClientService("tuniserver.com", "cookiemonster", "thisisnotagoodpassword")
#
# 2) all_users method is fetching all users from external FHIR server. Before using this method, 
#    ClientService class must be initialized like above. After init, it can be used like this: users = s.all_users()
#
# 3) filter_by_id method is fetching one user data from external FHIR server. Before using this method,
#    ClientService class must be initialized like above. After init, it can be used like this: user = s.filter_by_id("123")

class ClientService():
    def __init__(self, url, username, password):
        self.url = url
        self.username = username
        self.password = password

    def all_users(self):
        url = self.url + "/Patient?_format=json"
        print(url)
        response = requests.get(url,
                                auth=(self.username, self.password))
        return response.json()

    def filter_by_id(self, id):
        url = self.url + "/Patient/" + id + "$everything?_format=json"
        response = requests.get(url,
                                auth=(self.username, self.password))
        return response.json()
    
        