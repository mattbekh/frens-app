import sys
import os
import numpy as np
print("success")
import pandas as pd
from kmodes.kmodes import KModes
print("success after kmodes")
import matplotlib.pyplot as plt
import json


print("success before read data")
data = pd.read_csv('./data-output.csv')
data = data.set_index('username')
print("success after read data")

# print(data.to_string())

# # Elbow curve to find optimal K
# cost = []
# K = range(1,5)
# for num_clusters in list(K):
#     kmode = KModes(n_clusters=num_clusters, init = "random", n_init = 5, verbose=1)
#     kmode.fit_predict(data)
#     cost.append(kmode.cost_)
    
# plt.plot(K, cost, 'bx-')
# plt.xlabel('No. of clusters')
# plt.ylabel('Cost')
# plt.title('Elbow Method For Optimal k')
# # plt.show()

old_stdout = sys.stdout
sys.stdout = open(os.devnull, "w");
# Building the model with 3 clusters
kmode = KModes(n_clusters=3, init = "random", n_init = 5, verbose=1)
clusters = kmode.fit_predict(data)
# clusters

data.insert(0, "Cluster", clusters, True)
# data = list(zip(data.index, data["Cluster"]))
# data={'result':data.to_string()}

sys.stdout = old_stdout
# print(data)

dict = dict(zip(data.index, data['Cluster']))
data = json.dumps(dict, indent = 4)  
print(data)
# print('{"1":1,"2":2, "3":3}')
