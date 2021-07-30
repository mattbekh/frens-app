import sys
import numpy as np
import pandas as pd
from kmodes.kmodes import KModes
import matplotlib.pyplot as plt

data = pd.read_csv('./data-output.csv')
data = data.set_index('username')

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
plt.show()


# Building the model with 3 clusters
kmode = KModes(n_clusters=3, init = "random", n_init = 5, verbose=1)
clusters = kmode.fit_predict(data)
clusters

data.insert(0, "Cluster", clusters, True)
print(data.to_string())
