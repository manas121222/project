#include<iostream>
using namespace std;
class Node {
    public:
    int data;
    Node*next;

    Node(int data){
        this -> data = data;
        this -> next = Null;

    }

};
int main(){
node*Node1=new Node();
cout<<Node1 -> data << endl;
cout<< Node1 -> next << endl;
}