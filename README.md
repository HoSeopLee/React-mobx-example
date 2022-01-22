# Mobx-example

- 단일 스토어가 아닌 다중 스토어를 사용가능하다. Redux는 단일 스토어이지만 Mobx는 여러개의 스토어를 지정할 수 있다.
- 웹팩 설정을 건드려야 되는데 기존 방법은 eject를 하여 웹팩 설정을 변경하는 방법이 있지만 대부분 개발자들은 eject를 하고싶지 않기 때문에 eject를 하지 않고 웹팩 설정을 건드릴수 있는 라이브러리인 customize-cra react-app-rewired -D 로 다운 받고 js config 를 만들어 적용 시킨다고 한다.

## @observable 방식

1. observable(<value>)

- 데코레이터 없이 사용하는 방식
- @없이, 함수처럼 사용해서 리턴한 객체를사용

2. observable <클래스의 프로퍼티>

- 데코레이터로 사용하는 법
- 클래스 내부에 프로퍼티 앞에 붙여서 사용
- 한 클래스 안에 여러개의 @ovservable 존재

## @observer

1. observer(<컴포넌트>)

- 데코레이터 없이 사용하는 방식
- 함수 컴포넌트에 사용

2. <컴포넌트 클래스>에 @observer 달아서 처리

- 클래스 컴포넌트에 사용

## @computed

- computed란
  - computed(내부에서 observable을 사용하는 함수);
    - 데코레이터 없이 사용하는 방식
  - <observable 클래스> 의 getter에 @채ㅡㅔㅕㅅㄷㅇ ekfdktj cjfl
    - 스토어에 사용
    - getter에만 붙일수 있다.
  - 함수가 아닌 리액티브 하다는 것에 주목
  - 실제 컴포넌트에서 사용하는 (게터)값들에 달아서 사용하면 최소 범위로 변경 할 수 있기 때문에 유유용하다.
    - 40살이 넘었을때만 나이를 올리면 40살 이하일때는 재랜더링 대상이 아닌 것과 같은 경우
    - 내부적으로 고도의 최적화 => 방법은?
      - 매번 재계산을 하지 않는다.
      - 계산에 사용할 observable 값이 변경되지 않으면 재실행하지 않음.
      - 다른 computed 또는 reaction에 의해 호출되지 않으면 재실행하지 않음.
      - observable이 변했는데 computed가 변하지 않을때 랜더하지 않음.

## @Action

- Redux Action이랑 동일하다.
- 각각의 상태가 변경될때 재 랜더링이 일어나기때문에 하나로 묶어서 바뀌었을때 랜더링이 한번만 이뤄지게할 수 있다.

## @inject와 Provider

- 늘상 사용하는 Provider와 동일
  - 그러하여 컨터에너라는 개념을 사용해도 좋음.
- 프로바이더에 props로 넣고 @inject로 꺼내 쓴다고 생각하면 편함
  - 상당히 명시적이고 편하다고함.
  - 컨테이너를 쓰지 않아도 된다고 함
    - props로 바꿔줌.
    - this.props.store (props.store)
- 셋팅은 Provider 꺼내쓰는건 inject
- 컨테이너를 사용안해도 되지만 그래도 사용하는게 프레젠테이션 컴포넌트에 테스트와 분리를 통해서 훨신 유용하다고 함.

## mobx-devtools

- debug 개발자 도구

## @stores

- 다중 스토어 적용

## Asynchronous actions

1. 컨터에너에서 비동기 로직을 만들고 따로 처리하는 방식으로 구현해보기
