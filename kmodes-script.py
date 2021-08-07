import sys
print(sys.version)
print(sys.path)
import numpy as np
print("success!!!!!!!!!!!!!!!!!!!!!")
print(sys.version_info)

from kmodes.kmodes import KModes
print("success after kmodes")
import matplotlib.pyplot as plt
print("success after mttplot")

import pandas as pd
print(pd.__version__)
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!success!!!!!!!!!!!!!!!!!!!!!")


print("success before read data")
data = pd.read_csv('./data-output.csv')
data = data.set_index('username')
print("success after read data")

print(data.to_string())

# Elbow curve to find optimal K
cost = []
K = range(1,5)
for num_clusters in list(K):
    kmode = KModes(n_clusters=num_clusters, init = "random", n_init = 5, verbose=1)
    kmode.fit_predict(data)
    cost.append(kmode.cost_)
    
plt.plot(K, cost, 'bx-')
plt.xlabel('No. of clusters')
plt.ylabel('Cost')
plt.title('Elbow Method For Optimal k')
# plt.show()


# Building the model with 3 clusters
kmode = KModes(n_clusters=3, init = "random", n_init = 5, verbose=1)
clusters = kmode.fit_predict(data)
clusters

data.insert(0, "Cluster", clusters, True)
print(data.to_string())
print("success at the end")
