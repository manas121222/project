  for(int i=0;i<=n-2;i++){
        int mini=i;
        for(int j=i;j<=n-1;j++){
            if(arr[j]<mini){
                int mini=j;
            }
        }
        int temp=arr[mini];
        arr[mini]=arr[i];
        arr[i]=temp;

    }
}