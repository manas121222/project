#include<iostream>
#include <stack>
using namespace std;
class stack {
    public :
    int *arr;
    int top;
    int size;
    // behavior
    stack(int size) {
    this -> size = size;
    arr= new int[size];
    top = -1;
    }
    void push(int element){
    if (size-top >1){
        top++;
        arr[top] = element;
    }
    else {
        cout << "stack overflow"<< endl;
    }
    }
    void pop(){
        if (top >=0){
            tip--;
        }
        else{
            cout << "stack underFlow" <<endl;
        }

    }
    int peek(){
  if(top >= 0 ){
  return arr[top];
  }
  else{
    cout << "stack is empty"<<endl;
    return -1;
  }
    }
    bool  empty(){
        if (top == -1){
            return true;
            else{
                return false;
            }
        }

    }
};
int main(){
    stack st(5)
    st.puch(5);
    st.puch(22);
    st.puch(44);
    st.puch(55);
    cout << st.peek<<endl;
}