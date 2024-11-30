import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/operation";
import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <p>Loading tasks ...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <TaskList />}
    </Layout>
  );
};
