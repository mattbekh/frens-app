#!/usr/bin/env python
# coding: utf-8

# In[10]:

import sys
# supress warnings
import warnings
# warnings.filterwarnings('ignore')


# Importing all required packages
import numpy as np
import pandas as pd

# Data viz lib
import matplotlib.pyplot as plt
import seaborn as sns
# get_ipython().run_line_magic('matplotlib', 'inline')
from matplotlib.pyplot import xticks

from kmodes.kmodes import KModes

# random categorical data
# data = np.random.choice(7, (100, 10))
# dataDf = pd.DataFrame(data)
# dataDf


# In[11]:


data = pd.read_csv('./users.csv')
data.head()


# In[12]:


# First we will keep a copy of data
data_copy = data.copy()


# In[13]:


cost = []
for num_clusters in list(range(1,10)):
    kmode = KModes(n_clusters=num_clusters, init = "Cao", n_init = 1, verbose=1)
    kmode.fit_predict(data)
    cost.append(kmode.cost_)


# In[14]:


y = np.array([i for i in range(1,10,1)])
plt.plot(y,cost)


# In[15]:


km = KModes(n_clusters=4, init='Cao', n_init=5, verbose=1)

clusters = km.fit_predict(data)

# Print the cluster centroids
print(km.cluster_centroids_)



# In[16]:


clusters


# In[17]:


clustersDf = pd.DataFrame(clusters)
clustersDf.columns = ['cluster_predicted']
clustersDf


# In[18]:


combinedDf = pd.concat([data, clustersDf], axis = 1)
combinedDf


# In[19]:


plt.subplots(figsize = (15,5))
sns.countplot(x=combinedDf['cook'],order=combinedDf['cook'].value_counts().index,hue=combinedDf['cluster_predicted'])
plt.show()


# In[20]:


plt.subplots(figsize = (15,5))
sns.countplot(x=combinedDf['school'],order=combinedDf['school'].value_counts().index,hue=combinedDf['cluster_predicted'])
plt.show()


# In[ ]:





# In[ ]:





# In[ ]:




