import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, errors, isValid, getValues } = useForm({
    defaultValues: { email: 'test@test.co.jp', password: 'aaaa' },
  })

  const onSubmit = (data) => {
    console.log('data', data)
  }

  const onGet = (data) => {
    console.log('get', getValues(['email', 'password']))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" name="email" ref={register()} />
        {errors.email && 'パスワードは1文字以上、20文字以下でなければなりません。'}
        <input type="password" placeholder="Password" name="password" ref={register} />
        <input type="submit" value="submit" disabled={!isValid} />
        <input type="button" value="確認" onClick={onGet} />
      </form>
    </div>
  )
}

export default App
